# PURE CREW — Landing Page PRD

## Original Problem Statement
"construa uma landing page para a marca/escola pure crew, este é o logo (imagem 1), esta é a identidade visual basica (imagem 2), o foco é no preto e branco. espere ate envia o 1 post para ter noção da linguagem usada"

User clarifications:
- Escola de SURFSKATE, SURF e JIU-JITSU; merch existe mas não é o foco.
- Sem depoimentos. Restante das seções: Hero, Sobre, Modalidades, Galeria, Merch teaser, Inscrição/Contato, Footer.
- Form de inscrição funcional (salvando leads no MongoDB) E links diretos WhatsApp/Instagram.
- Links sociais como placeholders (usuário ajusta depois).

## Architecture
- **Backend**: FastAPI + Motor (Mongo). Endpoints `/api/leads` (POST/GET) e `/api/status` (POST/GET, regression).
- **Frontend**: React 19 + CRA (Craco) + TailwindCSS + Shadcn UI primitives + framer-motion + sonner.
- **Database**: MongoDB collection `leads` (id uuid, name, email, phone, modality, message, created_at).

## What's Implemented (2026-04-25)
- Brand identity (logo + Montserrat, palette preto/branco com acentos sutis #C25A46/#2F4A5A/#2F4F3E).
- Sections: Header sticky com nav scroll-spy, Hero com tipografia massiva editorial, Marquees animados, About manifesto + stats, Modalidades cards (3) com tags, Galeria bento grid grayscale, Merch teaser link externo, Inscrição com form (lead capture) + contatos diretos, Footer com wordmark gigante e links sociais.
- Backend leads CRUD (validação Pydantic v2 + EmailStr + Literal modality).
- Toast feedback via Sonner (estilo brutalista).
- Responsivo mobile-first com menu hamburguer.

## User Personas
- Praticantes/iniciantes interessados em surfskate, surf ou jiu-jitsu.
- Comunidade local que se identifica com o lifestyle "crew" (anti-academia, raw, vanlife).

## Core Requirements (static)
- Foco em preto e branco; acentos coloridos ≤5% da superfície.
- Tipografia Montserrat (headings black/all-caps, body regular/all-caps).
- Linguagem PT-BR raw e direta.

## Backlog
- P1: Substituir copy/links sociais com dados reais do cliente (Instagram, WhatsApp, e-mail).
- P1: Adicionar OG image + favicon Pure Crew (SEO básico).
- P2: Painel admin simples para visualizar/exportar leads.
- P2: Integração com WhatsApp Business / e-mail de notificação ao receber lead.
- P2: Galeria com upload dinâmico (CMS).

## Next Action Items
- Cliente envia o post de referência para refinar tone-of-voice se necessário.
- Cliente fornece links sociais reais e e-mail oficial.
