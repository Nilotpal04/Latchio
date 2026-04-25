import { useParams } from "react-router-dom";

function Workspace({plans}) {
    const { id } = useParams();
    const plan = plans.find(p => p.id.toString() === id);

    return (
        <div>
            <p className="font-semibold">{plan.name}</p>
            <p className="text-sm text-gray-500">{plan.date}</p>
            <p className="font-light">{plan.description}</p>
        </div>
    );
};