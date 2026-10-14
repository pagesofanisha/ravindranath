import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function MediaAndWriting() {
  const publications = [
    {
      category: "[ LITERARY FICTION & DRAMA ]",
      badge: "STATEWIDE CIRCULATION",
      title: "Telugu Stories, Features & Plays",
      description: "Written and published numerous Telugu short stories, cultural features, and theatrical plays portraying social themes, human resilience, and moral philosophy across leading weeklies.",
      publication: "ANDHRA PATRIKA · ANDHRA JYOTI · MAYURI",
      action: "PERIODICAL PUBLICATIONS",
    },
    {
      category: "[ PUBLIC BROADCASTING ]",
      badge: "STATE RADIO",
      title: "News Reels & Radio Broadcasts",
      description: "Scripted, edited, and presented news reels and literary features on All India Radio (AIR) Hyderabad, bringing contemporary social narratives to broad regional audiences.",
      publication: "ALL INDIA RADIO (AIR), HYDERABAD",
      action: "NEWS REEL PRESENTATIONS",
    },
    {
      category: "[ CORPORATE EDITORIAL ]",
      badge: "2014 – 2020",
      title: "L&T In-House e-Magazine",
      description: "Pioneered the concept, compilation, and editorial direction of the official in-house e-Magazine at Larsen & Toubro, circulating to tens of thousands of corporate employees.",
      publication: "LARSEN & TOUBRO (HQ CHENNAI)",
      action: "CHIEF EDITORIAL DIRECTION",
    },
  ];

  return (
    <section id="publications" className="py-20 lg:py-24 bg-[#F8F8F6] border-b border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip (Elena Vance Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#E5E4DF] gap-4 mb-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold block mb-2">
              [ LITERARY, BROADCAST &amp; EDITORIAL RECORD ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0D1322] tracking-tight">
              Published Works, Media &amp; Cultural Monographs
            </h2>
          </div>

          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            AUTHOR &amp; PROGRAMMER DOSSIER
          </span>
        </div>

        {/* 3 White Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {publications.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E4DF] p-8 flex flex-col justify-between shadow-xs hover:border-[#A3702C] transition-colors group"
            >
              <div>
                {/* Top Category Tag Row */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F0EFEA] mb-6 text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-[#A3702C] font-semibold">{item.category}</span>
                  <span className="text-neutral-400">{item.badge}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-normal text-[#0D1322] mb-4 leading-snug group-hover:text-[#A3702C] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 font-sans leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom Metadata & Expand */}
              <div className="pt-6 border-t border-[#F0EFEA] space-y-3">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                  {item.publication}
                </span>
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#0D1322] pt-2 border-t border-neutral-100">
                  <span className="text-[11px]">{item.action}</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#A3702C]" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
