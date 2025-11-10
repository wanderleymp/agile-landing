'use client'

import Image from 'next/image'

export default function ProvaSocialSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-azul-confianca to-verde-sucesso">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
            As maiores redes de hambúrguer do Brasil confiam no Colibri.
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Junte-se aos 50.000 estabelecimentos que usam o sistema #1 do Brasil. 
            Somos representantes oficiais Colibri há 25 anos em Rondônia e Acre.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50k+</div>
              <div className="text-white/80">Estabelecimentos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">R$28B</div>
              <div className="text-white/80">Em Transações</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">RO/AC</div>
              <div className="text-white/80">Representantes Oficiais</div>
            </div>
          </div>
        </div>

        {/* Logos de autoridade */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="flex justify-center">
              <div className="bg-white/20 rounded-lg p-4 w-32 h-16 flex items-center justify-center">
                <span className="text-white font-bold text-lg">DOM</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 rounded-lg p-4 w-32 h-16 flex items-center justify-center">
                <span className="text-white font-bold text-lg">OTEQUE</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 rounded-lg p-4 w-32 h-16 flex items-center justify-center">
                <span className="text-white font-bold text-lg">GALERIA</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 rounded-lg p-4 w-32 h-16 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MICH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/80 italic">
            Usado por grandes redes e reconhecido pelo D.O.M. e melhores restaurantes do Brasil.
          </p>
        </div>
      </div>
    </section>
  )
}