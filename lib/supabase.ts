import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false }
})

// FORMS = DB TABLES — from your packet
// FORM1 Deposit → deposits: Date, TX Number, Sender Name, Sender Email, Amount, Vault CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V, TX ID, Network SOL/TRON/BTC/ETH, Status
// FORM2 Withdrawal → withdrawals: Date, TX Number, Receiver, Wallet, Network, Amount, Fee $1, Receive, TX ID
// FORM3 KYC/AML → kyc_docs: Identity, Selfie, UN/OFAC/NZDF, FSP1004567 AML/CFT 2009
// FORM4 Daily Proof → daily_proof: Date, Worker ID, Solar kWh, Biogas m3, Phone Batch, GPS, Verifier1/2, Approved, Earnings $20.66/$23.16 $144.66/$162.16 $620/$720 Golden $5
// FORM5 Revenue → liquidity: Total Workers 2500, Inflow, Outflow, Net $20,330/day $142,310/week $609,900/mo, Reserve $1.28m 64%, Vault Float $2.5M 5% $342/day

export type Deposit = {
  tx_number: string
  sender_name: string
  sender_email: string
  amount: number
  vault_address: string
  tx_id: string
  network: 'SOL' | 'TRON' | 'BTC' | 'ETH'
  status: 'pending' | 'verified'
}

export type Withdrawal = {
  tx_number: string
  receiver_name: string
  wallet_address: string
  network: 'SOL' | 'TRON' | 'BTC' | 'ETH'
  amount: number
  fee: number
  receive_amount: number
  tx_id: string
}
