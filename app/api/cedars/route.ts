import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    company: 'Cedars Empire Ltd',
    reg: 'FSP1004567',
    act: 'AML/CFT 2009',
    vault: 'CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V',
    solscan: 'https://solscan.io/account/CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V',
    squads: '3-of-5 Multisig',
    earnings: { daily: 20.66, weekly: 144.66, monthly: 620, golden: 23.16 },
    referrals: { golden: 5, l1: 0.5, l2: 0.25, l3: 0.10 },
    status: 'live'
  })
}
