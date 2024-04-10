import React, { useState } from 'react';
import ParticlesBack from '../components/particles';

const Register = () => {
    const [document, setDocument] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el registro
        console.log('Documento:', document);
        console.log('Tipo Documento:', documentType);
        console.log('Nombre:', firstName);
        console.log('Apellido:', lastName);
        console.log('Teléfono:', phone);
        console.log('Correo:', email);
        console.log('Login:', username);
        console.log('Contraseña:', password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <ParticlesBack />
            <div className="max-w-md w-full space-y-8 bg-blue-400 p-8 rounded-lg">
                <div>
                    <img className="mx-auto h-24" src="src/assets/images/transfer.png" alt="Logo" /> {/* Ajusta el tamaño de la imagen aquí */}
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registro</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">Nombre</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="off"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Nombre"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Apellido</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="off"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Apellido"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="flex">
                            <div className="mr-2 w-[30%]">
                                <label htmlFor="documentType" className="text-sm font-medium text-gray-700">Tipo</label>
                                <select
                                    id="documentType"
                                    name="documentType"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    value={documentType}
                                    onChange={(e) => setDocumentType(e.target.value)}
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="DNI">DNI</option>
                                    <option value="Carnet de Extranjería">CI</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                </select>
                            </div>
                            <div className="w-[70%]">
                                <label htmlFor="document" className="text-sm font-medium text-gray-700">Documento</label>
                                <input
                                    id="document"
                                    name="document"
                                    type="text"
                                    autoComplete="off"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Documento"
                                    value={document}
                                    onChange={(e) => setDocument(e.target.value)}
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="off"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Teléfono"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Correo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="username" className="text-sm font-medium text-gray-700">Login</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Login"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Contraseña</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                ¿Ya tienes una cuenta? Inicia sesión
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm13.707-2.293a1 1 0 00-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414-1.414L9.414 11H17a1 1 0 100-2h-7.586l2.293-2.293z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
