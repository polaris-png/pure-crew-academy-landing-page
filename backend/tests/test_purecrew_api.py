"""PURE CREW backend API tests"""
import os
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://pure-crew-landing.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert r.json() == {"message": "PURE CREW API"}


# ---------- Leads ----------
def test_create_lead_valid(client):
    payload = {
        "name": "TEST_Joao Surfista",
        "email": "TEST_joao@example.com",
        "phone": "+5511999998888",
        "modality": "surfskate",
        "message": "Quero treinar"
    }
    r = client.post(f"{API}/leads", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "_id" not in data
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["phone"] == payload["phone"]
    assert data["modality"] == "surfskate"
    assert data["message"] == "Quero treinar"
    assert "created_at" in data and "T" in data["created_at"]


def test_create_lead_invalid_email(client):
    r = client.post(f"{API}/leads", json={
        "name": "X", "email": "not-an-email", "phone": "12345678", "modality": "surf"
    })
    assert r.status_code == 422


def test_create_lead_invalid_modality(client):
    r = client.post(f"{API}/leads", json={
        "name": "X", "email": "x@y.com", "phone": "12345678", "modality": "yoga"
    })
    assert r.status_code == 422


@pytest.mark.parametrize("missing", ["name", "email", "phone", "modality"])
def test_create_lead_missing_required(client, missing):
    payload = {"name": "X", "email": "x@y.com", "phone": "12345678", "modality": "surf"}
    payload.pop(missing)
    r = client.post(f"{API}/leads", json=payload)
    assert r.status_code == 422


def test_list_leads(client):
    # ensure at least one
    client.post(f"{API}/leads", json={
        "name": "TEST_List", "email": "TEST_list@x.com", "phone": "11999",
        "modality": "todos", "message": ""
    })
    r = client.get(f"{API}/leads")
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    assert len(items) >= 1
    for it in items:
        assert "_id" not in it
        assert "id" in it
        assert "created_at" in it
    # sorted desc by created_at
    ts = [it["created_at"] for it in items]
    assert ts == sorted(ts, reverse=True)


# ---------- Status (regression) ----------
def test_status_post_get(client):
    r = client.post(f"{API}/status", json={"client_name": "TEST_regression"})
    assert r.status_code == 200
    data = r.json()
    assert data["client_name"] == "TEST_regression"
    assert "id" in data and "timestamp" in data

    r2 = client.get(f"{API}/status")
    assert r2.status_code == 200
    assert isinstance(r2.json(), list)
