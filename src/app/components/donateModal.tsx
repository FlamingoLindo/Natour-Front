import React, { useState } from "react";

interface DonateModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (name: string, link: string) => void;
    onReset: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose, onSubmit, onReset }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, link);
        onClose(); 
        onReset();
        setName('');
        setLink('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-lg font-bold">Cadastrar Campanha</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="block text-sm">Nome:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm">Link:</label>
                        <input
                            type="url"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonateModal;