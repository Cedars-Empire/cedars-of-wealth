# CEDARS OF WEALTH — FINAL BENCHMARK + PROXY PROTECTION

## Earnings — Goal HIT
- Worker Base: **$20.66/day $144.66/week $620/mo**
- With 5 Referrals: **$23.16/day $162.16/week $720/mo** (Golden $5 instant + $0.50/day ×5 = $2.50/day)
- Calculator Slider: $800/$1000 + refs 0-10 live
- Company: **$20,330/day $142,310/week $609,900/month** with 2,500 workers + vault float $2.5M @5% APY $342/day
- Treasury Reserve: $1.28m 64% utilization
- Vault: `CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V` Solscan public — Squads 3-of-5 multi-sig

## Proxy Protection — Your Requirement
- Public IP: 104.x.x.x (Cloudflare Orange Cloud proxy)
- Origin Hidden: Vercel origin IP not scannable via Shodan
- Tunnel: cloudflared — no open ports 80/443
- WHOIS: Contact Privacy Inc. — Domain registrar Cloudflare
- Admin: Zero Trust + YubiKey 2FA for /admin
- Supabase: IP allowlist Cloudflare only + RLS

## FORMS = DB SCHEMA (from packet)
- FORM1 Deposit → `deposits` table — Date, TX Number, Sender, Email, Amount, Vault, TX ID, Network, Status
- FORM2 Withdrawal → `withdrawals` table — Date, TX Number, Receiver, Wallet, Network SOL/TRON/BTC/ETH, Amount, Fee $1, Receive, TX ID
- FORM3 KYC/AML → `kyc_docs` table — Identity, Selfie, UN/OFAC/NZDF check
- FORM4 Daily Proof & Earnings → `daily_proof` table — Date, Worker ID, Solar kWh, Biogas m3, Phone Batch, GPS, Verifier1/2, Approved, Earnings $20.66/$23.16 $144.66/$162.16 $620/$720 Golden $5
- FORM5 Revenue & Liquidity → `liquidity` table — Total Workers, Inflow, Outflow, Net, Reserve $1.28m, Revenue $20,330/day

## Build
1. GitHub private repo `cedars-of-wealth` → 12 files
2. Vercel Import GitHub → ENV SUPABASE_URL, VAULT_ADDRESS, TUNNEL_TOKEN
3. Cloudflare Tunnel + Zero Trust /admin
4. Deploy → Test FORM1 TX ID → FORM3 KYC → FORM4 $20.66 → FORM2 Withdraw TRON → FORM5 $20,330

## Components
- Header: My Balance $620 + Withdraw NO Connect Wallet + Logo cedar
- Footer: FSP1004567 NZ Compliance AML/CFT 2009 Privacy Act 2020 + Solscan + Terms Privacy Custodial
