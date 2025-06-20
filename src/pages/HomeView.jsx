import ExtraPresentation from '../components/home/ExtraPresentation';
import FlippCase from '../components/home/FlippCase';
import Presentation from '../components/home/Presentation';

export default function HomeView() {
    return (
        <main className="main-content">
            <Presentation />
            <FlippCase />
            <ExtraPresentation />
        </main>
    );
}
