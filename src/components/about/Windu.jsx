import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef } from 'react';

const Windu = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/mace_windu.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Mace_Windu_0"
                position={[0, -3.3, 0]} // Center the model
                rotation={[-3.125, 1.6, 3.139]} // Adjust if needed
                scale={350}
              >
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials['DLC_MaceWindu_diffuse_head.dds']}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials['DLC_maceWindu_diffuse_body.dds']}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials['DLC_maceWindu_diffuse_body.dds']}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <group name="ma_maceWindugto1_1" />
                  <group name="ma_maceWindugto2_2" />
                  <group name="ma_maceWindugto3_3" rotation={[0.017, 0, 0]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/mace_windu.glb');

export default Windu;
