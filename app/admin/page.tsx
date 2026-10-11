"use client"
export default function Admin() {
  return (
    <main style={{padding:20, background:'#0a0a0a', color:'#fff', minHeight:'100vh', fontFamily:'system-ui'}}>
      <h1>FORM3 / FORM4 / FORM5 — Admin Panel</h1>
      <p>Cedars Empire Ltd FSP1004567 | Vault CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V | Solscan Public | 3-of-5 Multisig</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:15, marginTop:20}}>
        <div style={{background:'#111', padding:15, borderRadius:8}}><h3>FORM3 KYC/AML</h3><p>FSP1004567 AML/CFT 2009 — UN/OFAC/NZDF</p></div>
        <div style={{background:'#111', padding:15, borderRadius:8}}><h3>FORM4 Daily Proof</h3><p>Worker ID, Solar kWh, Biogas m3, Phone Batch, GPS, Verifier1/2, Earnings $20.66/$23.16</p></div>
        <div style={{background:'#111', padding:15, borderRadius:8}}><h3>FORM5 Revenue</h3><p>$20,330/day $142,310/week $609,900/mo Reserve $1.28M Float $2.5M 5%</p></div>
      </div>
      <p style={{marginTop:20, color:'#facc15'}}>Build Status: Fixed — Ready for Vercel Deploy</p>
    </main>
  )
}
