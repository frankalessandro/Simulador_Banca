import "react-toastify/dist/ReactToastify.css";
import React from 'react'
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export const Movimientos = () => {

    //Disable Modales
    const [accountNumber, setAccountNumber] = useState('');
    const [accountOwner, setAccountOwner] = useState('');
    const [amount, setAmount] = useState('');
    const [isAccountNumberFilled, setIsAccountNumberFilled] = useState(false);
    const [isFormDisabled, setIsFormDisabled] = useState(true);

    // Abrir Modal
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    // Funciones Consignar
    const handleAccountNumberChange = (event) => {
        const value = event.target.value;
        setAccountNumber(value);
        setIsAccountNumberFilled(value.trim() !== '');
        setIsFormDisabled(value.trim() === '');
    };

    const handleConsultClick = () => {
        // Aquí puedes agregar la lógica para consultar la base de datos
        console.log('Consultando base de datos para el número de cuenta:', accountNumber);
        // Suponiendo que aquí se obtiene el nombre del dueño de la cuenta de la base de datos
        const ownerNameFromDatabase = "Nombre del dueño obtenido de la base de datos";
        setAccountOwner(ownerNameFromDatabase);
        setIsFormDisabled(false);
    };

    const handleConsign = () => {
        // Aquí puedes agregar la lógica para enviar los datos, por ejemplo, una llamada a una API
        console.log(`Enviando consignación: ${amount} a la cuenta ${accountNumber} perteneciente a ${accountOwner}`);
    };

    // Modal retirar

    //Abir Modal
    const [openModal1, setOpenModal1] = useState(false);
    const [email1, setEmail1] = useState('');

    function onCloseModal1() {
        setOpenModal1(false);
        setEmail1('');
    }
    //Funciones Modal Retirar
    const handleAccountNumberChangeRetirar = (event) => {
        const value = event.target.value;
        setAccountNumber(value);
        setIsAccountNumberFilled(value.trim() !== '');
        setIsFormDisabled(value.trim() === '');
    };

    const handleConsultClickRetirar = () => {
        console.log('Consultando base de datos para el número de cuenta:', accountNumber);
        const ownerNameFromDatabase = "Nombre del dueño obtenido de la base de datos";
        setAccountOwner(ownerNameFromDatabase);
        setIsFormDisabled(false);
    };

    const handleRetirar = () => {
        console.log(`Retirando: ${amount} de la cuenta ${accountNumber} perteneciente a ${accountOwner}`);
    };
    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className='flex justify-center items-center flex-col gap-10' style={{ minHeight: '85vh' }}>
                        <span>Seleccione el movimiento que desee realizar</span>
                        <div className="flex gap-10">
                            <div>
                                <Button className="border-green hover:scale-110 duration-100" onClick={() => setOpenModal(true)}>
                                    <div className="flex flex-col items-center justify-center w-32 h-32">
                                        <svg class="w-14 text-darkGreen dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                        </svg>
                                        <svg class="w-24 text-green dark:text-white group-hover:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
                                            <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                                        </svg>
                                        <span className="font-bold text-xl text-darkGreen">Consignar</span>
                                    </div>
                                </Button>
                                <Modal className="bg-black bg-opacity-60 flex justify-center items-center w-screen h-screen p-0" show={openModal} size="md" onClose={onCloseModal} popup>
                                    <Modal.Header>
                                        <h3 className="text-xl py-2 pl-4 pr-3 font-medium text-gray-900 dark:text-white">Consignar</h3>
                                    </Modal.Header>
                                    <Modal.Body className="px-5 pt-2 pb-5">
                                        <div className="space-y-6">
                                            <div>
                                                <div className="mb-2 block">
                                                    <label htmlFor="accountNumber" className="font-medium text-gray-700 dark:text-white">Número de cuenta de ahorro:</label>
                                                </div>
                                                <input
                                                    id="accountNumber"
                                                    type="text"
                                                    placeholder="Número de cuenta"
                                                    value={accountNumber}
                                                    onChange={handleAccountNumberChange}
                                                    required
                                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${!isAccountNumberFilled ? 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300' : ''}`}
                                                />
                                                {isAccountNumberFilled && (
                                                    <button onClick={handleConsultClick} className={`mt-2 bg-green hover:bg-green hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all ${isFormDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isFormDisabled}>
                                                        Consultar
                                                    </button>
                                                )}
                                            </div>
                                            <div>
                                                <label htmlFor="accountOwner" className="font-medium text-gray-700 dark:text-white">Nombre del dueño de la cuenta:</label>
                                                <input
                                                    id="accountOwner"
                                                    type="text"
                                                    placeholder="Nombre del dueño"
                                                    value={accountOwner}
                                                    onChange={(event) => setAccountOwner(event.target.value)}
                                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${isFormDisabled || !isAccountNumberFilled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}
                                                    readOnly
                                                    disabled={!isAccountNumberFilled}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="amount" className="font-medium text-gray-700 dark:text-white">Monto a consignar:</label>
                                                <input
                                                    id="amount"
                                                    type="number"
                                                    placeholder="Monto a consignar"
                                                    value={amount}
                                                    onChange={(event) => setAmount(event.target.value)}
                                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${isFormDisabled || !isAccountNumberFilled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}
                                                    disabled={!isAccountNumberFilled}
                                                />
                                            </div>
                                            <div className="w-full">
                                                <button onClick={handleConsign} className={`w-full bg-green hover:bg-green hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all ${isFormDisabled || !isAccountNumberFilled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isFormDisabled || !isAccountNumberFilled}>
                                                    Enviar
                                                </button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div>
                                <Button className="border-green hover:scale-110 duration-100" onClick={() => setOpenModal1(true)}>
                                    <div className="flex flex-col items-center justify-center w-32 h-32">
                                        <svg class="w-24 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
                                            <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                                        </svg>
                                        <svg class="w-14 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 14-4-4m4 4 4-4" />
                                        </svg>
                                        <span className="font-bold text-xl text-darkGreen">Retirar</span>
                                    </div>
                                </Button>
                                <Modal className="bg-black bg-opacity-60 flex justify-center items-center w-screen h-screen p-0" show={openModal1} size="md" onClose={onCloseModal1} popup>
                                    <Modal.Header>
                                        <h3 className="text-xl py-2 pl-4 pr-3 font-medium text-gray-900 dark:text-white">Retirar</h3>
                                    </Modal.Header>
                                    <Modal.Body className="px-5 pt-2 pb-5">
                                        <div className="space-y-6">
                                            <div>
                                                <div className="mb-2 block">
                                                    <label htmlFor="accountNumberRetirar" className="font-medium text-gray-700 dark:text-white">Número de cuenta de ahorro:</label>
                                                </div>
                                                <input
                                                    id="accountNumberRetirar"
                                                    type="text"
                                                    placeholder="Número de cuenta"
                                                    value={accountNumber}
                                                    onChange={handleAccountNumberChangeRetirar}
                                                    required
                                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${!isAccountNumberFilled ? 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300' : ''}`}
                                                />
                                                {isAccountNumberFilled && (
                                                    <button onClick={handleConsultClickRetirar} className={`mt-2 bg-green hover:bg-green hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all ${isFormDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isFormDisabled}>
                                                        Consultar
                                                    </button>
                                                )}
                                            </div>
                                            <div>
                                                <label htmlFor="accountOwnerRetirar" className="font-medium text-gray-700 dark:text-white">Nombre del dueño de la cuenta:</label>
                                                <input
                                                    id="accountOwnerRetirar"
                                                    type="text"
                                                    placeholder="Nombre del dueño"
                                                    value={accountOwner}
                                                    onChange={(event) => setAccountOwner(event.target.value)}
                                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${isFormDisabled || !isAccountNumberFilled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}
                                                    readOnly
                                                    disabled={!isAccountNumberFilled}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="amountRetirar" className="font-medium text-gray-700 dark:text-white">Monto a retirar:</label>
                                                <input
                                                    id="amountRetirar"
                                                    type="number"
                                                    placeholder="Monto a retirar"
                                                    value={amount}
                                                    onChange={(event) => setAmount(event.target.value)}
                                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${isFormDisabled || !isAccountNumberFilled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}
                                                    disabled={!isAccountNumberFilled}
                                                />
                                            </div>
                                            <div className="w-full">
                                                <button onClick={handleRetirar} className={`w-full bg-red-600 hover:bg-red-600 hover:scale-105 duration-100 text-white font-bold py-2 px-4 rounded transition-all ${isFormDisabled || !isAccountNumberFilled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isFormDisabled || !isAccountNumberFilled}>
                                                    Retirar
                                                </button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
