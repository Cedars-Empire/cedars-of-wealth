"use client"
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Deposit() {
  const [form, setForm] = useState({ sender_name:'', sender_email:'', amount:100, tx_id:'', network:'SOL' as any })
  const [done, setDone] = useState(false)

  async function submit() {
    const tx_number = `TX-${Date.now()}`
    await supabase.from('deposits').insert([{
      tx_number,
      sender_name: form.sender_name,
      sender_email: form.sender_email,
      amount: form.amount,
      vault_address: 'CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V',
      tx_id: form.tx_id,
      network: form.network,
      status: 'pending',
      created_at: new Date().toISOString()
    }])
    setDone(true)
  }

  return (
    <main style={{padding:20, background:'#0a0a0a', color:'#fff', minHeight:'100vh'}}>
      <h1>FORM1 — Deposit → deposits table</h1>
      <p style={{color:'#888', fontSize:13}}>Date, TX Number, Sender Name, Sender Email, Amount, Vault CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V Solscan Public, TX ID, Network SOL/TRON/BTC/ETH, Status</p>
      
      {done ? <div style={{background:'#c8ff00', color:'#000', padding:20, borderRadius:10}}>Deposit submitted! Earnings $20.66/day activated.</div> :
      <div style={{display:'grid', gap:10, maxWidth:500, marginTop:20}}>
        <input placeholder="Sender Name" value={form.sender_name} onChange={e=>setForm({...form, sender_name:e.target.value})} />
        <input placeholder="Sender Email" value={form.sender_email} onChange={e=>setForm({...form, sender_email:e.target.value})} />
        <input type="number" placeholder="Amount" value={form.amount} onChange={e=>setForm({...form, amount:Number(e.target.value)})} />
        <input placeholder="TX ID — paste blockchain TX" value={form.tx_id} onChange={e=>setForm({...form, tx_id:e.target.value})} />
        <select value={form.network} onChange={e=>setForm({...form, network:e.target.value as any})}>
          <option>SOL</option><option>TRON</option><option>BTC</option><option>ETH</option>
        </select>
        <div style={{background:'#111', padding:10, fontSize:12}}>Vault: CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V — Squads 3-of-5 — View on Solscan</div>
        <button onClick={submit} style={{padding:12}}>Submit Deposit</button>
      </div>}
    </main>
  )
}
