// homepage.jsx
import React, { useState, useEffect } from 'react';
import * as styles from './homepagestyle';
import axios from 'axios';
import Cookies from 'js-cookie'

function Homepage() {
    const [users, setUsers] = useState([]);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalCad, setShowModalCad] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [phone, setPhone] = useState('');
    const [usernameCad, setUsernameCad] = useState('');
    const [emailCad, setEmailCad] = useState('');
    const [passwordCad, setPasswordCad] = useState('');
    const [firstnameCad, setFirstnameCad] = useState('');
    const [lastnameCad, setLastnameCad] = useState('');
    const [cityCad, setCityCad] = useState('');
    const [streetCad, setStreetCad] = useState('');
    const [numberCad, setNumberCad] = useState('');
    const [zipcodeCad, setZipcodeCad] = useState('');
    const [latitudeCad, setLatitudeCad] = useState('');
    const [longitudeCad, setLongitudeCad] = useState('');
    const [phoneCad, setPhoneCad] = useState('');

    const addUser = async () => {
        try {
            const response = await axios.post(`https://fakestoreapi.com/users`,
                {
                    email: emailCad,
                    username: usernameCad,
                    password: passwordCad,
                    name: {
                        firstname: firstnameCad,
                        lastname: lastnameCad
                    },
                    address: {
                        city: cityCad,
                        street: streetCad,
                        number: numberCad,
                        zipcode: zipcodeCad,
                        geolocation: {
                            lat: latitudeCad,
                            long: longitudeCad
                        }
                    },
                    phone: phoneCad
                }
            )
            // Após algumas tentativas notei que a resposta de sucesso desse endpoint realmente é o
            // status 200 e não o 201 e ela retorna apenas o Id do usuário supostamente criado,
            // por isso estou usando o 200 como parâmetro para sucesso.
            if (response.status == 200) {
                alert('Usuário criado com sucesso!', response.status);
                setShowModalCad(false);
            }
        } catch (e) {
            console.log(e);
        }
    }


    const updateUser = async () => {
        try {
            const response = await axios.put(`https://fakestoreapi.com/users/${Cookies.get('user')}`,
                {
                    email: email,
                    username: username,
                    password: password,
                    name: {
                        firstname: firstname,
                        lastname: lastname
                    },
                    address: {
                        city: city,
                        street: street,
                        number: number,
                        zipcode: zipcode,
                        geolocation: {
                            lat: latitude,
                            long: longitude
                        }
                    },
                    phone: phone
                }
            )
            if (response.status == 200) {
                alert('Usuário editado com sucesso!', response.status);
                setShowModalEdit(false);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const getUser = async (id) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/users/${id}`)
            const data = response.data;
            setUsername(data.username);
            setEmail(data.email);
            setPassword(data.password);
            setFirstname(data.name.firstname);
            setLastname(data.name.lastname);
            setCity(data.address.city);
            setStreet(data.address.street);
            setNumber(data.address.number);
            setZipcode(data.address.zipcode);
            setLatitude(data.address.geolocation.lat);
            setLongitude(data.address.geolocation.long);
            setPhone(data.phone);
            setShowModalEdit(true);
            await Cookies.set('user', id);
        } catch (e) {
            console.log(e)
        }
    }


    const getUsers = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/users');
            await setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`https://fakestoreapi.com/users/${id}`)
            if (response.data.id == id) {
                alert("Usuário deletado com sucesso!")
            } else {
                alert("Falha ao deletar usuáerio!")
            }
        } catch (e) {
            console.log(e)
        }
    }



    useEffect(() => {
        getUsers();
    }, []);


    return (
        <>
            <styles.Header>
                <h1>Lista de Usuários</h1>
                <styles.AddButton onClick={() => setShowModalCad(true)}>Cadastrar Novo Usuário</styles.AddButton>
            </styles.Header>
            <styles.GridContainer>
                {users.map((user) => (
                    <styles.UserCard>
                        <styles.UserInfo>
                            <strong>Username:</strong> {user.username}
                        </styles.UserInfo>
                        <styles.UserInfo>
                            <strong>Nome Completo:</strong> {user.name.firstname} {user.name.lastname}
                        </styles.UserInfo>
                        <styles.UserInfo>
                            <strong>Email:</strong> {user.email}
                        </styles.UserInfo>
                        <styles.UserInfo>
                            <strong>Cidade:</strong> {user.address.city}
                        </styles.UserInfo>
                        <styles.UserInfo>
                            <strong>Rua:</strong> {user.address.street}
                        </styles.UserInfo>
                        <styles.UserInfo>
                            <strong>Número:</strong> {user.address.number}
                        </styles.UserInfo>
                        <styles.UserInfo>
                            <strong>CEP:</strong> {user.address.zipcode}
                        </styles.UserInfo>
                        <styles.UserInfo>
                            <strong>Telefone:</strong> {user.phone}
                        </styles.UserInfo>
                        <button className="editButton" onClick={() => getUser(user.id)}>Editar</button>
                        <button className="deleteButton" onClick={() => deleteUser(user.id)}>Deletar</button>
                    </styles.UserCard>
                ))}
            </styles.GridContainer>
            {showModalEdit == true &&
                <styles.StyledModal>
                    <styles.ModalContainer>
                        <styles.ModalHeader>Editar Usuário</styles.ModalHeader>
                        <styles.ModalForm>
                            <styles.ModalInput value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                            <styles.ModalInput value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                            <styles.ModalInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
                            <styles.ModalInput value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Primeiro nome" />
                            <styles.ModalInput value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Ultimo nome" />
                            <styles.ModalInput value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Cidade" />
                            <styles.ModalInput value={street} onChange={(e) => setStreet(e.target.value)} type="text" placeholder="Rua" />
                            <styles.ModalInput value={number} onChange={(e) => setNumber(e.target.value)} type="text" placeholder="Número" />
                            <styles.ModalInput value={zipcode} onChange={(e) => setZipcode(e.target.value)} type="text" placeholder="CEP" />
                            <styles.ModalInput value={latitude} onChange={(e) => setLatitude(e.target.value)} type="text" placeholder="Latitude" />
                            <styles.ModalInput value={longitude} onChange={(e) => setLongitude(e.target.value)} type="text" placeholder="Longitude" />
                            <styles.ModalInput value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Telefone" />
                        </styles.ModalForm>
                        <styles.ModalButton onClick={() => updateUser()}>Salvar</styles.ModalButton>
                        <styles.ModalCancelButton onClick={() => setShowModalEdit(false)}>Cancelar</styles.ModalCancelButton>
                    </styles.ModalContainer>
                </styles.StyledModal>
            }
            {showModalCad == true &&
                <styles.StyledModal>
                    <styles.ModalContainer>
                        <styles.ModalHeader>Cadastrar Usuário</styles.ModalHeader>
                        <styles.ModalForm>
                            <styles.ModalInput onChange={(e) => setUsernameCad(e.target.value)} type="text" placeholder="Username" />
                            <styles.ModalInput onChange={(e) => setEmailCad(e.target.value)} type="text" placeholder="Email" />
                            <styles.ModalInput onChange={(e) => setPasswordCad(e.target.value)} type="password" placeholder="Senha" />
                            <styles.ModalInput onChange={(e) => setFirstnameCad(e.target.value)} type="text" placeholder="Primeiro nome" />
                            <styles.ModalInput onChange={(e) => setLastnameCad(e.target.value)} type="text" placeholder="Ultimo nome" />
                            <styles.ModalInput onChange={(e) => setCityCad(e.target.value)} type="text" placeholder="Cidade" />
                            <styles.ModalInput onChange={(e) => setStreetCad(e.target.value)} type="text" placeholder="Rua" />
                            <styles.ModalInput onChange={(e) => setNumberCad(e.target.value)} type="text" placeholder="Número" />
                            <styles.ModalInput onChange={(e) => setZipcodeCad(e.target.value)} type="text" placeholder="CEP" />
                            <styles.ModalInput onChange={(e) => setLatitudeCad(e.target.value)} type="text" placeholder="Latitude" />
                            <styles.ModalInput onChange={(e) => setLongitudeCad(e.target.value)} type="text" placeholder="Longitude" />
                            <styles.ModalInput onChange={(e) => setPhoneCad(e.target.value)} type="text" placeholder="Telefone" />
                        </styles.ModalForm>
                        <styles.ModalButton onClick={() => addUser()}>Salvar</styles.ModalButton>
                        <styles.ModalCancelButton onClick={() => setShowModalCad(false)}>Cancelar</styles.ModalCancelButton>
                    </styles.ModalContainer>
                </styles.StyledModal>
            }
        </>
    );
}

export default Homepage;
