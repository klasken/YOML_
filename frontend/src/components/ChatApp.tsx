import React, { useState, useEffect } from 'react';

const defaultConvs = [{ id: 99, name: "Loïs", avatar: "https://i.pravatar.cc/150?u=lois", lastMsg: "Salut!", history: [] }];

export default function ChatApp({ initialUser }: { initialUser?: any }) {
  const [convs, setConvs] = useState(defaultConvs);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!initialUser) return;
    const exists = convs.find(c => c.id === initialUser.id);

    if (!exists) {
      setConvs([...convs, { id: initialUser.id, name: initialUser.nom, avatar: `https://i.pravatar.cc/150?u=${initialUser.id}`, lastMsg: "Nouveau", history: [] }]);
    }
    setActiveId(initialUser.id);
  }, [initialUser]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !activeId) return;

    setConvs(convs.map(c => c.id === activeId ? {
      ...c,
      history: [...c.history, { me: true, txt: text }],
      lastMsg: text
    } : c));

    setText("");
  };

  const active = convs.find(c => c.id === activeId);

  return (
    <div className="flex h-full w-full bg-white rounded-tl-3xl shadow-2xl overflow-hidden">
      <div className="w-80 border-r overflow-y-auto hidden md:block">
        <div className="p-4 font-bold border-b">Messages</div>
        {convs.map(c => (
          <div key={c.id} onClick={() => setActiveId(c.id)} className={`p-4 flex items-center cursor-pointer hover:bg-gray-50 ${activeId === c.id ? 'bg-blue-50 border-l-4 border-blue-900' : ''}`}>
            <img src={c.avatar} className="w-10 h-10 rounded-full object-cover" />
            <div className="ml-3 overflow-hidden">
                <div className="font-bold truncate">{c.name}</div>
                <div className="text-sm text-gray-500 truncate">{c.lastMsg}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col bg-gray-50">
        {active ? (
          <>
            <div className="p-4 bg-white border-b flex items-center font-bold text-lg">
                <img src={active.avatar} className="w-8 h-8 rounded-full mr-3"/> {active.name}
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {active.history.length === 0 && <p className="text-center text-gray-400 mt-10">Dites bonjour !</p>}
              {active.history.map((m: any, i: number) => (
                <div key={i} className={`flex ${m.me ? 'justify-end' : ''}`}>
                    <div className={`px-4 py-2 rounded-lg max-w-xs ${m.me ? 'bg-blue-600 text-white' : 'bg-white border'}`}>{m.txt}</div>
                </div>
              ))}
            </div>

            <form onSubmit={sendMessage} className="p-4 bg-white border-t flex gap-2">
              <input value={text} onChange={e => setText(e.target.value)} className="flex-1 border rounded-full px-4 py-2 outline-none focus:border-blue-500" placeholder="Message..." />
              <button type="submit" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">➤</button>
            </form>
          </>
        ) : <div className="m-auto text-gray-400">Sélectionne une conversation</div>}
      </div>
    </div>
  );
}
