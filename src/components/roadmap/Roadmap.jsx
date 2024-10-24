import Heading from '../../ui/Heading';
import Subheading from '../../ui/Subheading';
import RoadmapTimeline from './RoadmapTimeline';

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="overflow-hidden px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Heading primary="roadmap" />
        <Subheading>
          On Windu&apos;s mama he finna follow thru on all deez promises.
        </Subheading>
        <RoadmapTimeline />
      </div>
    </section>
  );
};

export default Roadmap;
