import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const name: string | null = localStorage.getItem('name');
	if (!name) {
		return <Navigate to='/login' />;
	}
	return children;
};
