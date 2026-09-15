import React, { useState } from 'react';
import { BookOpen, Globe2, Network, Feather, Milestone, Flame, Search, Languages, ChevronLeft, ChevronRight } from 'lucide-react';

import absoluteCinemaImg from '/src/imports/absolutecinema.jpg';
import looksmaxxingImg from '@/imports/looksmaxxing.jpg';
import suetaImg from '@/imports/sueta.jpg';
import meme4Img from '@/imports/401d9c9f0ee7b4fb62852c8516f3df2c.jpg';
import meme5Img from '@/imports/a723e172adfc8e1121eca8eb60d14659.jpg';

interface Meme {
  src: string;
  alt: string;
  title?: string;
  symbolism?: string;
  communication?: string;
}

const memes: Meme[] = [
  {
    src: absoluteCinemaImg,
    alt: 'Absolute Cinema — Мартин Скорсезе',
    title: '«Absolute Cinema»',
    symbolism: 'Возведение банальной или абсурдной жизненной ситуации в ранг великого искусства.',
    communication: 'Реакция на сочные сплетни, неожиданный поворот сюжета в переписке или эпичный бытовой конфликт.',
  },
  {
    src: looksmaxxingImg,
    alt: 'Mewing / Bye Bye — looksmaxxing',
    title: '«Mewing / Bye Bye»',
    symbolism: 'Символ доведенного до абсурда самосовершенствования (looksmaxxing) и демонстративного невербального превосходства.',
    communication: 'Знак выхода из бессмысленного спора — демонстративное молчание в ответ на глупый вопрос («я выше этих разговоров»).',
  },
  {
    src: suetaImg,
    alt: 'Суета — навести суету',
    title: '«Суета»',
    symbolism: 'Переосмысление термина из знака суматохи в индикатор бурной жизнедеятельности, авантюр, создания шумихи и резкого взвинчивания динамики событий.',
    communication: 'Сигнал к спонтанным встречам, шуточным провокациям или объявлению о начале интенсивного рабочего процесса («пора навести суету в коде перед дедлайном»).',
  },
  {
    src: meme4Img,
    alt: 'Мем — Родится отморозок',
  },
  {
    src: meme5Img,
    alt: 'Мем — Браток, ми тупие',
  },
];

const OrnamentalDivider = () => (
  <div className="flex items-center justify-center gap-4 my-16 opacity-70">
    <div className="h-px w-24 bg-[var(--color-rule)]"></div>
    <div className="w-2 h-2 rotate-45 border border-[var(--color-gold)]"></div>
    <div className="w-3 h-3 rotate-45 border border-[var(--color-gold)] bg-[var(--color-gold)]/10"></div>
    <div className="w-2 h-2 rotate-45 border border-[var(--color-gold)]"></div>
    <div className="h-px w-24 bg-[var(--color-rule)]"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-parchment)] text-[var(--color-ink)] font-[var(--font-body)]">

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--color-parchment)]/90 backdrop-blur-md border-b border-[var(--color-rule)]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between text-sm uppercase tracking-widest font-semibold text-[var(--color-ink-muted)]">
          <div className="flex items-center gap-2">
            <Feather className="w-4 h-4 text-[var(--color-gold)]" />
            <span className="font-[var(--font-display)] text-[var(--color-ink)]">Культурология</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#intro" className="hover:text-[var(--color-burgundy)] transition-colors">Введение</a>
            <a href="#typology" className="hover:text-[var(--color-burgundy)] transition-colors">Типология</a>
            <a href="#functions" className="hover:text-[var(--color-burgundy)] transition-colors">Функции</a>
            <a href="#examples" className="hover:text-[var(--color-burgundy)] transition-colors">Примеры</a>
            <a href="#communication" className="hover:text-[var(--color-burgundy)] transition-colors text-[var(--color-gold-light)]">Коммуникация</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="intro" className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-ink) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] font-semibold mb-6">Исследование</p>
          <h1 className="font-[var(--font-display)] text-5xl md:text-7xl font-semibold mb-8 text-[var(--color-ink)] leading-tight">
            Символы культуры
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-ink-muted)] max-w-2xl mx-auto leading-relaxed italic">
            Их скрытая роль и фундаментальное значение в процессах культурной коммуникации и становлении человеческого общества.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-32">

        {/* Introduction */}
        <section className="prose prose-lg md:prose-xl max-w-none text-[var(--color-ink-muted)]">
          <p className="first-letter:text-7xl first-letter:font-[var(--font-display)] first-letter:text-[var(--color-burgundy)] first-letter:mr-3 first-letter:float-left">
            Символ — это не просто знак, указывающий на некий объект, это глубоко укорененный в культуре смысловой конструкт, способный объединять эпохи, народы и мировоззрения. В отличие от знака, значение которого зачастую конвенционально и однозначно, символ многозначен и неисчерпаем в своих интерпретациях. Он выступает в качестве универсального языка, на котором культура «разговаривает» сама с собой и с другими культурами.
          </p>
        </section>

        <OrnamentalDivider />

        {/* Typology */}
        <section id="typology" className="scroll-mt-24">
          <h2 className="font-[var(--font-display)] text-4xl text-center mb-16 text-[var(--color-burgundy)]">
            Типология культурных символов
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-parchment-dark)] p-8 border border-[var(--color-rule)] rounded-sm">
              <div className="w-12 h-12 rounded-full border border-[var(--color-gold)] flex items-center justify-center mb-6 bg-[var(--color-parchment)]">
                <Globe2 className="w-6 h-6 text-[var(--color-gold)]" />
              </div>
              <h3 className="font-[var(--font-display)] text-2xl mb-4">Универсальные (Архетипические)</h3>
              <p className="text-[var(--color-ink-muted)] leading-relaxed">
                Символы, встречающиеся практически во всех культурах мира (Мировое древо, Огонь, Вода, Колесо). Они отражают базовые структуры человеческого сознания и восприятия мироздания.
              </p>
            </div>
            <div className="bg-[var(--color-parchment-dark)] p-8 border border-[var(--color-rule)] rounded-sm">
              <div className="w-12 h-12 rounded-full border border-[var(--color-gold)] flex items-center justify-center mb-6 bg-[var(--color-parchment)]">
                <Milestone className="w-6 h-6 text-[var(--color-gold)]" />
              </div>
              <h3 className="font-[var(--font-display)] text-2xl mb-4">Национально-специфичные</h3>
              <p className="text-[var(--color-ink-muted)] leading-relaxed">
                Символы, понятные и имеющие глубокий отклик лишь в рамках определенной культуры или этноса (Сакура в Японии, Береза в России). Они формируют национальную идентичность.
              </p>
            </div>
          </div>
        </section>

        <OrnamentalDivider />

        {/* Functions */}
        <section id="functions" className="scroll-mt-24">
          <h2 className="font-[var(--font-display)] text-4xl text-center mb-16 text-[var(--color-burgundy)]">
            Функции символа
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mt-2">
                <Search className="w-8 h-8 text-[var(--color-gold-light)]" />
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-2xl mb-3">Познавательная (гносеологическая)</h3>
                <p className="text-[var(--color-ink-muted)] text-lg leading-relaxed">
                  Символ выступает как инструмент познания мира, позволяя выразить невыразимое, облечь в форму абстрактные идеи и трансцендентный опыт.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-rule)] to-transparent"></div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mt-2">
                <Languages className="w-8 h-8 text-[var(--color-gold-light)]" />
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-2xl mb-3">Коммуникативная</h3>
                <p className="text-[var(--color-ink-muted)] text-lg leading-relaxed">
                  Обеспечивает передачу смыслов между людьми, поколениями и различными культурами. Символ — это концентрированный текст, который нужно уметь дешифровать.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-rule)] to-transparent"></div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mt-2">
                <Flame className="w-8 h-8 text-[var(--color-gold-light)]" />
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-2xl mb-3">Интегративная</h3>
                <p className="text-[var(--color-ink-muted)] text-lg leading-relaxed">
                  Объединяет социум вокруг общих ценностей и идеалов, формируя чувство принадлежности к единой общности (например, государственные символы, религиозные святыни).
                </p>
              </div>
            </div>
          </div>
        </section>

        <OrnamentalDivider />

        {/* Examples with Images */}
        <section id="examples" className="scroll-mt-24">
          <h2 className="font-[var(--font-display)] text-4xl text-center mb-16 text-[var(--color-burgundy)]">
            Символы в мировой культуре
          </h2>

          <figure className="mb-16">
            <div className="aspect-[21/9] w-full overflow-hidden rounded-sm mb-6 border-4 border-[var(--color-parchment-dark)] shadow-xl relative">
               <div className="absolute inset-0 bg-[var(--color-burgundy)]/10 mix-blend-multiply z-10 pointer-events-none"></div>
               <img
                 src="https://images.unsplash.com/photo-1601887389937-0b02c26b602c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=80"
                 alt="Classical marble statue"
                 className="w-full h-full object-cover grayscale opacity-90"
               />
            </div>
            <figcaption className="text-center text-sm tracking-wide text-[var(--color-ink-light)] italic">
              Античная скульптура как символ совершенства формы и антропоцентризма.
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[var(--color-ink-muted)] mb-12">
            <p>
              Каждая эпоха порождает свою уникальную систему символов. В Средневековье доминировали религиозные символы (крест, чаша), в эпоху Возрождения на первый план выходит человек как мера всех вещей. В современную эпоху символами становятся бренды, технологические инновации и даже мемы, отражающие фрагментарность и динамизм современной культуры.
            </p>
          </div>
        </section>

        {/* Meme Carousel */}
        <MemeCarousel />

        <OrnamentalDivider />

        {/* Final Section */}
        <section id="communication" className="scroll-mt-24 mt-8 pt-16 border-t-2 border-double border-[var(--color-rule)]">
          <div className="text-center mb-12">
            <Network className="w-12 h-12 text-[var(--color-burgundy)] mx-auto mb-6" />
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-burgundy)]">
              Символ в культурной коммуникации
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center mb-12">
            <div className="md:col-span-5 relative">
              <div className="absolute -inset-4 border border-[var(--color-gold)]/30 rounded-sm transform rotate-3"></div>
              <img
                 src="https://images.unsplash.com/photo-1602660187275-7275b639d7ea?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                 alt="Ancient manuscript"
                 className="w-full h-auto rounded-sm relative z-10 sepia-[0.3]"
              />
            </div>
            <div className="md:col-span-7 prose prose-lg text-[var(--color-ink-muted)]">
              <p>
                В контексте межкультурной коммуникации символ играет двойственную роль. С одной стороны, он выступает в качестве <strong>моста</strong>, позволяя представителям разных культур находить точки соприкосновения через универсальные архетипы. С другой стороны, именно символы часто становятся причиной культурного недопонимания и конфликтов.
              </p>
              <p>
                То, что в одной культуре является символом чистоты и святости (например, белый цвет в европейской традиции), в другой может символизировать траур и смерть (в традиционном Китае). Поэтому успешная культурная коммуникация требует не только знания языка, но и глубокого понимания символического кода чужой культуры, способности к дешифровке скрытых смыслов и эмпатии.
              </p>
            </div>
          </div>

          <div className="bg-white/40 p-8 md:p-12 border-l-4 border-[var(--color-gold)] my-12 backdrop-blur-sm">
            <h3 className="font-[var(--font-display)] text-2xl mb-4 text-[var(--color-ink)]">Семиосфера Ю.М. Лотмана</h3>
            <p className="text-[var(--color-ink-muted)] text-lg mb-0 italic">
              «Символ выступает как посланник других культурных эпох, напоминание о древних (и вечных) основах культуры. Он никогда не принадлежит какому-либо одному синхронному срезу культуры, он всегда пронзает этот срез по вертикали, приходя из прошлого и уходя в будущее».
            </p>
          </div>

          <div className="text-lg text-[var(--color-ink-muted)] leading-relaxed">
            <p className="mb-6">
              Современный этап развития общества, характеризующийся процессами глобализации и дигитализации, приводит к формированию новой, глобальной символической среды. В ней традиционные локальные символы переплетаются с новыми, транснациональными знаками массовой культуры.
            </p>
            <p>
              В конечном итоге, способность культуры порождать, сохранять и транслировать символы является показателем ее жизненной силы. Пока живы символы, жива и сама культура, продолжая свой бесконечный диалог в пространстве и времени.
            </p>
          </div>
        </section>

      </main>

      <footer className="bg-[var(--color-ink)] text-[var(--color-parchment)] py-12 text-center border-t-8 border-[var(--color-burgundy)]">
        <div className="max-w-4xl mx-auto px-6">
          <BookOpen className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-6" />
          <p className="font-[var(--font-display)] text-xl text-[var(--color-gold-light)] mb-2">Zholdygaly Serzhan</p>
          <p className="text-sm opacity-70 tracking-widest font-mono uppercase">Turan Astana University</p>
        </div>
      </footer>
    </div>
  );
}
