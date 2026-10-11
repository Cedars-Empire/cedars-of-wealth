export const metadata = {
  title: 'Cedars of Wealth | Cedars Empire Ltd FSP1004567',
  description: 'Vault CDRvault...9KzLmNpQ7RwBx4TgFy2HsD8V - Solscan Public - 3-of-5 Multisig - Reserve $1.28M Float $2.5M'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0, background:'#050505', color:'#fff', fontFamily:'system-ui'}}>
        {children}
      </body>
    </html>
  )
}
