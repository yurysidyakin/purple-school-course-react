import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	// const name: string | null = localStorage.getItem('name');
	const name = useSelector((s: RootState) => {
		return s.user.name;
	});
	if (!name) {
		return <Navigate to='/login' />;
	}
	return children;
};
