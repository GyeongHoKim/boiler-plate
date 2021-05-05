import React, {useEffect} from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import {auth} from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
	//option이 null이면 상관없음, true이면 로그인 한 사람만, false이면 로그인 하지 않은 사람만
	function AuthenticationCheck(props) {
		const dispatch = useDispatch();
		useEffect(() => {
			dispatch(auth()).then(response => {
				console.log(response);
				if (!response.payload.isAuth) {
					//로그인 하지 않은 상태
					if (option)
						props.history.push('/login');
				}
				else {
					//로그인 한 상태
					if (adminRoute && !response.payload.isAdmin) {
						props.history.push('/');
					}
					else {
						if (option === false)
							props.history.push('/');
					}
				}
			})
		}, [])
		
		return (
			<SpecificComponent />
		)
	}
	
	return AuthenticationCheck
}