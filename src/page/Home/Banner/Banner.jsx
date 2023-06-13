import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div>
            <Carousel className='text-center'>
                <div>
                    <img src="https://media.istockphoto.com/id/1183940092/photo/footballer-dribbling-ball-on-training-between-orange-cones-young-football-player-in-sports.webp?b=1&s=170667a&w=0&k=20&c=Ml9tjfK4Mc9Ur0hO2ivh8DUcBZFfBW-fxZiROLymR-M=" />
                    <h2 className='-mt-96 text-3xl text-slate-300 text-bold'>A team sport played with a round ball where two teams of 11 players each try to score goals by kicking the ball into the opponent's net.</h2>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1355086328/photo/american-football-championship-teams-ready-professional-players-aggressive-face-off-ready-for.webp?b=1&s=170667a&w=0&k=20&c=oppcugL5if8KL9citBpZoSIlGL5bvzxxiKYOnA-WvRs=" />
                    <h2 className='-mt-96 text-3xl text-slate-300 text-bold'> A standard football match is divided into two halves of 45 minutes each, totaling 90 minutes of gameplay. There is typically a 15-minute halftime break.</h2>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1201438254/photo/basketball-arena.webp?b=1&s=170667a&w=0&k=20&c=rddJQ4oakpWkZf0sO60eA7eJ0qK3LWBliPUn4d3OR4g=" />
                    <h2 className='-mt-96 text-3xl text-slate-300 text-bold'>The game is governed by the Laws of the Game set by the International Football Association Board (IFAB). Some essential rules include offside, fouls, yellow and red cards, throw-ins, goal kicks, corner kicks, and penalty kicks.</h2>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1294407182/photo/playing-field.webp?b=1&s=170667a&w=0&k=20&c=UqobgP0B9PnhDYKCXOnl0JRfU5Grow-ZwpprUoTTc2s=" />
                    <h2 className='-mt-96 text-3xl text-slate-300 text-bold'>Football, also known as soccer in some parts of the world, is the most popular sport globally. It is played between two teams, each consisting of 11 players, on a rectangular field with </h2>
                </div>

                <div>

                    <img src="https://media.istockphoto.com/id/695604058/photo/many-activities.webp?b=1&s=170667a&w=0&k=20&c=gdtwA-Mw5n4W7tUM8TcuwHHu-QNHMwuwiBQIyM1RgrI=" />
                    <h2 className='-mt-96 text-3xl text-slate-300 text-bold'>: Football has various levels of competition, ranging from local leagues and domestic cups to international tournaments. The most prominent international competitions include the FIFA World Cup, UEFA Champions League, and domestic</h2>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/904094442/photo/kids-preparing-for-track-run-race.webp?b=1&s=170667a&w=0&k=20&c=-aad2-_rn_YpTiXLhuyEBMPGq9Jcm2akBbDbmfXfYWo=" />
                    <h2 className='-mt-96 text-3xl text-slate-300 text-bold'>The players are assigned different positions on the field, each with specific responsibilities. The basic positions include goalkeeper, defenders, midfielders, and forwards/strikers.</h2>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;