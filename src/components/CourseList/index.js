import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title) {
    return { type: 'ADD_COURSE', title };
}

export default function CourseList() {

    /*
        quantidade de cursos
        que desejo retornar.
    */
    const qty = 10;

    /*
        Pegando   a   informação   de
        courses do reducer de courses

        _____________________________

        state => state.data

        é equivalente a

        state => { 
            return state.data 
        } 
        _____________________________

        A função  useSelector()  ela  pode receber  um segundo  parâmetro.
        Toda  vez  que  a variável  state.data   mudar  a  nossa  variável
        courses é executada novamente assim o return é executado novamente
        e   serão  mostrados  os  novos  cursos  em  tela. Supondo  que  a
        state.data seja dependente de alguma variável que esteja dentro do
        nosso  componente  (no caso a const qty),  podemos  então fazer um
        state.data.SLICE(0, QTY).  Podemos então passar ao useSelector  um
        segundo parâmetro baseada nessa variável  qty no array de sensibi-
        lidade.
    */

    const courses = useSelector(
        state => state.data.slice(0, qty),
        /* nesse caso se qty não for alterada
        courses não será executado novamente.
        */
        [qty]
    );

    const dispatch = useDispatch();

    function addCourse(){

        /*
            No reducer de  courses
            passamos como primeiro
            parâmetro  um   type e
            depois    um    title.

            A     dispatch    fica   responsável
            por    adicionar   no   reducer essa
            nova informação que foi introduzida,
            em outras palavras,  o useDispatch é
            o novo  responsável  por disparar as
            actions   do    redux.
        */

        dispatch(addCourseAction('GraphQL'))
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course} > {course} </li>)}
            </ul>
            <button type="button" onClick={addCourse}>
                Adicionar curso
            </button>
        </>
    )
}
