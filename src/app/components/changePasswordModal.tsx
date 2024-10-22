import React, { useState } from "react";

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (password: string, newPassword: string, confPassword: string) => void;
    onReset: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({isOpen, onClose, onSubmit, onReset}) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(password, newPassword, confPassword);
        onClose();
        onReset();
        setPassword('');
        setNewPassword('');
        setConfPassword('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-lg font-bold">Atualizar senha</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="block text-sm">Senha atual:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm">Senha atual:</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm">Digete a sua nova senha novamente:</label>
                        <input
                            type="password"
                            value={confPassword}
                            onChange={(e) => setPassword(e.target.value)}
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

export default ChangePasswordModal;