import { Html } from '@react-three/drei';
import { FaSpinner } from 'react-icons/fa6';

const LoadModel = () => {
  return (
    <Html
      as="div"
      center
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span>
        <FaSpinner className="animate-spin text-5xl text-purple-500" />
      </span>
      <span className="animate-pulse font-semibold uppercase text-slate-100">
        loading...
      </span>
    </Html>
  );
};

export default LoadModel;
