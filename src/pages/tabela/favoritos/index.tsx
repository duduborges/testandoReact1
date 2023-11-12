
import { } from "../../../assets/css/index.css"
import { useState, useEffect, useContext } from "react"
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { db } from "../../../services/firebaseConnection";
import { AuthContext } from "../../../contexts/AuthContext";
import { IoChevronBackSharp } from "react-icons/io5";


interface AnotProps {
    id: string,
    nome: string,
    descricao: string,
    bg: string,
    color: string,
    uid: string,
}



export function Favorito() {
    const { user } = useContext(AuthContext)
    const [anot, setAnots] = useState<AnotProps[]>([])

    useEffect(() => {
        function loadingAnots() {
            if (!user?.uid) {
                return
            }

            const anotRef = collection(db, "Post-it")
            const queryRef = query(anotRef, where("uid", "==", user.uid))

            getDocs(queryRef)
                .then((snapshot) => {
                    let lista = [] as AnotProps[];
                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            nome: doc.data().nome,
                            descricao: doc.data().descricao,
                            bg: doc.data().bg,
                            color: doc.data().color,
                            uid: doc.data().uid
                        })
                    })

                    setAnots(lista)
                })
        }
        loadingAnots()
    }, [user])


    return (
        <div>
            <div>
                <IoChevronBackSharp size={40} />
            </div>
            <h1>Fa</h1>
            <div className="map-postit">
                {anot.map((anot) => (
                    <article id="art" className="final" key={anot.id}
                        style={{
                            backgroundColor: anot.bg,
                            color: anot.color
                        }}>
                        <p>{anot.nome}</p>

                    </article>
                ))
                }
            </div>
        </div>

    )
}