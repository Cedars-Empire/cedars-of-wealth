"use client"
import { useState } from 'react'

export default function Home() {
  const [refs, setRefs] = useState(5)
  const [earnTarget, setEarnTarget] = useState(720)

  const baseDay = 20.66
  const baseWeek = 144.66
  const baseMonth = 620
  const refBonusDay = refs * 0.5
  const goldenInstant = refs * 5
  const totalDay = baseDay + refBonusDay
  const totalWeek = 144.66 + (refs * 0.5 * 7)
  const totalMonth = 620 + (refs * 0.5 * 30)

  return (
    <main style={{fontFamily:'system-ui', padding:'20px', background:'#0a0a0a', color:'#fff', minHeight:'100vh'}}>
      <header style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #222', paddingBottom:15}}>
        <div style={{display:'flex', gap:10, alignItems:'center'}}><span style={{fontSize:28}}>🌲</span><b>CEDARS OF WEALTH</b></div>
        <div style={{display:'flex', gap:15}}>
          <span style={{background:'#111', padding:'8px 12px', borderRadius:8}}>My Balance $620</span>
          <a href="/withdraw" style={{background:'#c8ff00', color:'#000', padding:'8px 16px', borderRadius:8, textDecoration:'none', fontWeight:'bold'}}>Withdraw NO Connect Wallet</a>
        </div>
      </header>

      <section style={{textAlign:'center', padding:'60px 0'}}>
        <h1 style={{fontSize:56, lineHeight:1}}>FINAL BENCHMARK<br/>PROXY PROTECTED</h1>
        <p style={{color:'#c8ff00', fontSize:20, marginTop:10}}>$20.66/day $144.66/week $620/mo → With 5 refs $23.16/day $162.16/week $720/mo</p>
        <p style={{color:'#888', marginTop:8}}>Company $20,330/day $142,310/week $609,900/mo • Vault CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V • Solscan Public • Squads 3-of-5</p>
        
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:15, maxWidth:900, margin:'30px auto', textAlign:'left'}}>
          <div style={{background:'#111', padding:20, borderRadius:12, border:'1px solid #222'}}><small>BASE</small><h2>${baseDay}/day</h2><p>${baseWeek}/week ${baseMonth}/mo</p></div>
          <div style={{background:'#c8ff00', color:'#000', padding:20, borderRadius:12}}><small>WITH {refs} REFS + GOLDEN ${goldenInstant}</small><h2>${totalDay.toFixed(2)}/day</h2><p>${totalWeek.toFixed(2)}/week ${totalMonth.toFixed(2)}/mo</p></div>
          <div style={{background:'#111', padding:20, borderRadius:12, border:'1px solid #222'}}><small>COMPANY</small><h2>$20,330/day</h2><p>$142,310/week $609,900/mo Float $2.5M 5% $342/day</p></div>
        </div>

        <div style={{maxWidth:600, margin:'30px auto', background:'#111', padding:20, borderRadius:12}}>
          <label>Calculator — Earn Target: ${earnTarget} — Refs: {refs}</label><br/>
          <input type="range" min="0" max="10" value={refs} onChange={e=>setRefs(Number(e.target.value))} style={{width:'100%'}}/>
          <input type="range" min="620" max="1000" step="10" value={earnTarget} onChange={e=>setEarnTarget(Number(e.target.value))} style={{width:'100%', marginTop:10}}/>
          <p style={{marginTop:10, fontSize:14, color:'#888'}}>Golden $5 instant + $0.50/day per ref • Formula: {refs} × $5 = ${goldenInstant} instant + {refs} × $0.50 = ${refBonusDay.toFixed(2)}/day</p>
        </div>

        <div style={{maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:15, textAlign:'left', fontSize:13}}>
          <div style={{background:'#111', padding:15, borderRadius:10}}><b>FORM1 Deposit → deposits</b><br/>Date, TX Number, Sender, Email, Amount, Vault, TX ID, Network SOL/TRON/BTC/ETH, Status</div>
          <div style={{background:'#111', padding:15, borderRadius:10}}><b>FORM2 Withdrawal → withdrawals</b><br/>Date, TX Number, Receiver, Wallet, TRON/SOL/BTC/ETH, Amount, Fee $1, Receive, TX ID</div>
          <div style={{background:'#111', padding:15, borderRadius:10}}><b>FORM3 KYC/AML → kyc_docs</b><br/>Identity, Selfie, UN/OFAC/NZDF, FSP1004567, AML/CFT 2009, Privacy 2020</div>
          <div style={{background:'#111', padding:15, borderRadius:10}}><b>FORM4 Proof → daily_proof</b><br/>Worker ID, Solar kWh, Biogas m3, Phone Batch, GPS, Verifier1/2, Earnings $20.66/$23.16</div>
        </div>

        <p style={{marginTop:20, fontSize:12, color:'#555'}}>Proxy Protected: Public IP 104.x.x.x Cloudflare Orange Cloud • Origin Hidden • WHOIS Privacy • Zero Trust /admin YubiKey • Solscan Vault Public</p>
      </section>

      <footer style={{borderTop:'1px solid #222', paddingTop:15, fontSize:11, color:'#666', textAlign:'center'}}>
        FSP1004567 NZ Compliance AML/CFT 2009 Privacy Act 2020 • Vault CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V Solscan • Terms Privacy Custodial
      </footer>
    </main>
  )
}
