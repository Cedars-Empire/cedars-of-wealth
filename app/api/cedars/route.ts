import { NextResponse } from 'next/server'
export async function GET() {
  return NextResponse.json({
    company: 'Cedars Empire Ltd',
    reg: 'FSP1004567',
    vault: 'CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V',
    solscan: 'https://solscan.io/account/CDRvault',
    multisig: '3-of-5 Squads',
    reserve: '$1.28M',
    float: '$2.5M 5%',
    status: 'live',
    build: 'fixed-v3'
  })
}
