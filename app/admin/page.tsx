"use client"
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Admin() {
  const [deposits, setDeposits] = useState<any[]>([])
  const [withdrawals, setWithdrawals] = useState<any[]>([])

  useEffect(() => {
    supabase.from('deposits').select('*').order('created_at',{ascending:false}).limit(50).then(r=>setDeposits(r.data||[]))
    supabase.from('withdrawals').select('*').order('created_at',{ascending:false}).limit(50).then(r=>setWithdrawals(r.data||[]))
  }, [])

  return (
    <main style={{padding:20, background:'#0a0a0a', color:'#fff', minHeight:'100vh', fontSize:13}}>
      <h1>FORM3/4/5 — Admin — KYC/AML + Daily Proof + Liquidity + Referrals</h1>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginTop:20}}>
        
        <div>
          <h2>FORM1 Deposits — Vault CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V Solscan</h2>
          <table><thead><tr><th>TX</th><th>Name</th><th>Amount</th><th>TX ID</th><th>Network</th></tr></thead>
          <tbody>{deposits.map(d=><tr key={d.id}><td>{d.tx_number}</td><td>{d.sender_name}</td><td>${d.amount}</td><td style={{maxWidth:100, overflow:'hidden'}}>{d.tx_id}</td><td>{d.network}</td></tr>)}</tbody></table>
        </div>

        <div>
          <h2>FORM2 Withdrawals — $1 Fee — NO Connect</h2>
          <table><thead><tr><th>TX</th><th>Receiver</th><th>Wallet</th><th>Amount</th><th>Receive</th></tr></thead>
          <tbody>{withdrawals.map(w=><tr key={w.id}><td>{w.tx_number}</td><td>{w.receiver_name}</td><td style={{maxWidth:100, overflow:'hidden'}}>{w.wallet_address}</td><td>${w.amount}</td><td>${w.receive_amount}</td></tr>)}</tbody></table>
        </div>
      </div>

      <div style={{marginTop:30, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:15}}>
        <div style={{background:'#111', padding:15, borderRadius:8}}>
          <h3>FORM3 KYC/AML — FSP1004567 AML/CFT 2009</h3>
          <p>UN/OFAC/NZDF checks, ID, Selfie, FSP1004567</p>
        </div>
        <div style={{background:'#111', padding:15, borderRadius:8}}>
          <h3>FORM4 Daily Proof — Final Benchmark Proxy</h3>
          <p>Worker ID, Solar kWh, Biogas m3, Phone Batch, GPS, Verifier1/2, Earnings $20.66/$23.16 $144.66/$162.16 $620/$720 Golden $5</p>
        </div>
        <div style={{background:'#111', padding:15, borderRadius:8}}>
          <h3>FORM5 Revenue — $20,330/day 2500 workers</h3>
          <p>Net $20,330/day $142,310/week $609,900/mo Reserve $1.28m 64% Vault Float $2.5M 5% $342/day — Cedars Empire Ltd</p>
        </div>
      </div>

      <div style={{marginTop:20, background:'#111', padding:15}}>
        <h3>FORM Referrals — 3-Level $0.50/day + Golden $5</h3>
        <p>Level1 $0.50/day per active — Level2 $0.25 — Level3 $0.10 — Golden Tick $5 instant each — Leaderboard</p>
        <p style={{color:'#888'}}>All tied to Supabase: referrals, kyc_docs, daily_proof, liquidity, bonus_claims — Vault: CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V — Solscan Public</p>
      </div>
    </main>
  )
}
