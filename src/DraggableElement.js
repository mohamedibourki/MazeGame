    import React, { useEffect } from 'react';
    import interact from 'interactjs'; // Make sure to install the 'interactjs' library

    function DraggableElements() {
        useEffect(() => {
            // target elements with the "draggable" class
            interact('.draggable')
                .draggable({
                    inertia: true,
                    modifiers: [
                        interact.modifiers.restrictRect({
                            restriction: 'parent',
                            endOnly: true,
                        }),
                    ],
                    autoScroll: true,
                    listeners: {
                        move: dragMoveListener,
                    },
                });
        }, []);

        function dragMoveListener(event) {
            const target = event.target;
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }

        return (
            <div className='dragos'>
                <div id="drag-1" className="draggable">
                    <p>Ball</p>
                </div>
                <div id="drag-2" className="draggable">
                    <p>Goal</p>
                </div>
            </div>
        );
    }

    export default DraggableElements;