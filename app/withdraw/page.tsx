"use client"
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Withdraw() {
  const [form, setForm] = useState({ receiver_name:'', wallet_address:'', network:'SOL' as any, amount:20.66 })
  const fee = 1
  const receive = form.amount - fee

  async function submit() {
    if(receive < 0) return alert('Min withdraw $20.66')
    const tx_number = `W-${Date.now()}`
    await supabase.from('withdrawals').insert([{
      tx_number,
      receiver_name: form.receiver_name,
      wallet_address: form.wallet_address,
      network: form.network,
      amount: form.amount,
      fee,
      receive_amount: receive,
      created_at: new Date().toISOString()
    }])
    alert(`Withdraw request $${form.amount} Fee $1 Receive $${receive} NO Connect Wallet — TX ${tx_number}`)
  }

  return (
    <main style={{padding:20, background:'#0a0a0a', color:'#fff', minHeight:'100vh'}}>
      <h1>FORM2 — Withdrawal → withdrawals — NO Connect Wallet</h1>
      <p style={{color:'#c8ff00'}}>Paste wallet ONLY — $1 fee — $20.66/day $144.66/week $620/mo + Golden $5 instant + $0.50/day per ref</p>

      <div style={{display:'grid', gap:10, maxWidth:500, marginTop:20}}>
        <input placeholder="Receiver Name" value={form.receiver_name} onChange={e=>setForm({...form, receiver_name:e.target.value})} />
        <input placeholder="Wallet Address SOL/TRON/BTC/ETH — Paste only, no connect" value={form.wallet_address} onChange={e=>setForm({...form, wallet_address:e.target.value})} />
        <select value={form.network} onChange={e=>setForm({...form, network:e.target.value as any})}>
          <option>SOL</option><option>TRON</option><option>BTC</option><option>ETH</option>
        </select>
        <input type="number" value={form.amount} onChange={e=>setForm({...form, amount:Number(e.target.value)})} />
        <div style={{background:'#111', padding:12, borderRadius:8, fontSize:13}}>
          Fee: ${fee} | You receive: ${receive.toFixed(2)} | Company Vault CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V Pays
        </div>
        <button onClick={submit} style={{padding:12}}>Request Withdrawal</button>
        <p style={{fontSize:11, color:'#666'}}>FSP1004567 AML/CFT 2009 — Squads 3-of-5 approval — Solscan public TX — No wallet connection needed</p>
      </div>
    </main>
  )
}
