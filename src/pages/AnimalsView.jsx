import React, { useState } from 'react'

const animales = [
    {
        nombre: 'León',
        imagen: '../src/assets/leoninternet.jpg',
        descripcion: 'El rey de la selva, fuerte y majestuoso.',
        categoria: 'terrestre',
    },
    {
        nombre: 'Águila',
        imagen: '../src/assets/leoninternet.jpg',
        descripcion: 'Ave rapaz de gran visión.',
        categoria: 'aéreo',
    },
    {
        nombre: 'Delfín',
        imagen: '../src/assets/leoninternet.jpg',
        descripcion: 'Mamífero marino muy inteligente.',
        categoria: 'acuático',
    },
    {
        nombre: 'Delfín',
        imagen: '../src/assets/leoninternet.jpg',
        descripcion: 'Mamífero marino muy inteligente.',
        categoria: 'acuático',
    },
    {
        nombre: 'Delfín',
        imagen: '../src/assets/leoninternet.jpg',
        descripcion: 'Mamífero marino muy inteligente.',
        categoria: 'acuático',
    },
]


export default function AnimalsView() {
    const [filtro, setFiltro] = useState('todos')

    const animalesFiltrados =
        filtro === 'todos'
            ? animales
            : animales.filter((animal) => animal.categoria === filtro)

    return (
        <div className="p-4">
            {/* Filtros */}
            <div className="flex gap-4 justify-center mb-6">
                {['todos', 'terrestre', 'aéreo', 'acuático'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFiltro(cat)}
                        className={`px-4 py-2 rounded-full ${filtro === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {cat[0].toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {animalesFiltrados.map((animal, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-4 text-center max-w-xs mx-auto"
                    >
                        <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                            <img
                                src={animal.imagen}
                                alt={animal.nombre}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold">{animal.nombre}</h3>
                        <p className="text-gray-600">{animal.descripcion}</p>
                    </div>

                ))}
            </section>
        </div>

    )
}
