import Draggable from 'react-draggable';

const DragBox = () => 
  // onClick eventlistener
  <Draggable>
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
    </Draggable>
  
// export module
export default DragBox;