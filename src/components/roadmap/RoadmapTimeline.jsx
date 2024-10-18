import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timeline } from '../../constants';

const RoadmapTimeline = () => {
  return (
    <VerticalTimeline lineColor="#A855F7" className="mx-0 mt-10">
      {timeline.map((info) => (
        <VerticalTimelineElement
          key={info.id}
          date={info.date}
          icon={
            <info.icon className={`md:scale-105 lg:scale-125 xl:scale-150`} />
          }
          className="text-slate-100"
          iconStyle={{
            background: info.iconBg,
            boxShadow: 'none',
            border: '4px solid #A855F7',
          }}
          contentStyle={{
            borderBottomWidth: '6px',
            borderTopWidth: '1px',
            borderRightWidth: '1px',
            borderLeftWidth: '1px',
            borderStyle: 'solid',
            borderTopColor: info.iconBg,
            borderLeftColor: info.iconBg,
            borderRightColor: info.iconBg,
            borderBottomColor: info.accentColor,
            boxShadow: 'none',
            background: `linear-gradient(to bottom ${
              info.id % 2 === 0 ? 'left' : 'right'
            }, rgb(31 41 55), rgb(55 65 81) `,
          }}
          contentArrowStyle={{ borderRightColor: '#A855F7' }}
        >
          <h3 className="font-starJedi text-xl tracking-wide md:text-2xl lg:text-3xl">
            {info.title}
          </h3>
          {info.description && (
            <p className="capitalize text-slate-400">{info.description}</p>
          )}
          <ul className="my-5 ml-5 list-disc space-y-2 marker:text-purple-500">
            {info.points.map((point, i) => (
              <li
                key={i}
                className="pl-1 text-base font-normal text-slate-200 md:text-xl"
              >
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default RoadmapTimeline;
