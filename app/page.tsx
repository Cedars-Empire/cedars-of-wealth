"use client"
export default function Home(){
  return (
    <main style={{minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:24, fontFamily:'system-ui'}}>
      <header style={{maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between'}}>
        <h1 style={{fontWeight:800}}>🌲 Cedars Empire Ltd <span style={{color:'#facc15'}}>FSP1004567</span></h1>
        <a href="/admin" style={{background:'#facc15', color:'#000', padding:'10px 16px', borderRadius:8, textDecoration:'none', fontWeight:700}}>Admin FORM3/4/5</a>
      </header>
      <section style={{maxWidth:1100, margin:'40px auto', background:'#0f0f0f', border:'1px solid #222', borderRadius:16, padding:24}}>
        <h2 style={{fontSize:32, margin:0}}>Vault: CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V</h2>
        <p style={{color:'#aaa'}}>Solscan Public • 3-of-5 Squads Multisig • Reserve $1.28M • Float $2.5M • 5% Yield</p>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:16, marginTop:24}}>
          <div style={{background:'#111', padding:16, borderRadius:12}}><b>Worker</b><p>$20.66/day $23.16 bonus $144.66/week</p></div>
          <div style={{background:'#111', padding:16, borderRadius:12}}><b>Referrals</b><p>Golden $5 + $0.50/day L1 $0.25 L2 $0.10 L3</p></div>
          <div style={{background:'#111', padding:16, borderRadius:12}}><b>FORM3 KYC</b><p>FSP1004567 AML/CFT UN/OFAC/NZDF</p></div>
        </div>
        <div style={{marginTop:24}}>
          <a href="/api/cedars" style={{border:'1px solid #333', color:'#fff', padding:'12px 18px', borderRadius:10, textDecoration:'none'}}>Check API</a>
        </div>
      </section>
    </main>
  )
}
