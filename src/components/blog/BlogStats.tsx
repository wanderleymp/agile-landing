'use client'

import { BarChart, Users, TrendingUp, Eye } from 'lucide-react'

export default function BlogStats() {
  const stats = [
    {
      icon: Eye,
      value: '1.2K',
      label: 'Visualizações/mês',
      change: '+15%'
    },
    {
      icon: Users,
      value: '850',
      label: 'Leitores únicos',
      change: '+22%'
    },
    {
      icon: BarChart,
      value: '3.2min',
      label: 'Tempo médio',
      change: '+8%'
    },
    {
      icon: TrendingUp,
      value: '4.8',
      label: 'Engajamento',
      change: '+12%'
    }
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-poppins font-bold text-lg text-cinza-escuro mb-4">Métricas do Blog</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-3 bg-cinza-claro rounded-lg">
            <stat.icon className="w-6 h-6 text-azul-confianca mx-auto mb-2" />
            <div className="text-2xl font-bold text-cinza-escuro">{stat.value}</div>
            <div className="text-xs text-cinza-medio mt-1">{stat.label}</div>
            <div className="text-xs text-verde-sucesso font-medium mt-1">{stat.change}</div>
          </div>
        ))}
      </div>
    </div>
  )
}