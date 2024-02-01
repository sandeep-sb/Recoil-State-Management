import { useRecoilValue } from "recoil";
import { todoAtom } from "../../state/atoms/todoAtom";


export default function Home () {

    const todo = useRecoilValue(todoAtom);

    return (
        <table>
            <thead>
               <tr>
                    <th>Title</th>
                    <th>Description</th>
               </tr>
            </thead>
            <tbody>
                {todo.map((t) => (
                    <tr key={t.title}>
                        <td>{t.title}</td>
                        <td>{t.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
