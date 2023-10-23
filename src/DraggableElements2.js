import React, { useEffect } from 'react';
import interact from 'interactjs';
import { useNavigate } from 'react-router-dom';

function DraggableElements2() {
    const navigate = useNavigate();

    useEffect(() => {
        interact('.drag-drop').draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true,
                }),
            ],
            autoScroll: true,
            listeners: { move: dragMoveListener },
        });

        interact('.dropzone').dropzone({
            accept: '.drag-drop',
            overlap: 0.75,
            ondragenter: function (event) {
                var draggableElement = event.relatedTarget;
                var dropzoneElement = event.target;
                dropzoneElement.classList.add('drop-target');
                draggableElement.classList.add('can-drop');
            },
            ondragleave: function (event) {
                event.target.classList.remove('drop-target');
                event.relatedTarget.classList.remove('can-drop');
            },
            ondrop: function (event) {
                // Check if the dropped element is the black ball
                if (event.relatedTarget.id === 'drag-1') {
                    // Navigate to GameLevel2
                    navigate('/GameLevel3');
                }
            },                       
        });
    }, []);

    function dragMoveListener(event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // Check for collisions with walls
        const walls = document.querySelectorAll('.wallLevel2, .wallLevel21, .wallLevel22, .wallLevel23, .wallLevel24');
        const ballRect = target.getBoundingClientRect();

        let isColliding = false;
        walls.forEach((wall) => {
            const wallRect = wall.getBoundingClientRect();
            if (
                ballRect.right > wallRect.left &&
                ballRect.left < wallRect.right &&
                ballRect.bottom > wallRect.top &&
                ballRect.top < wallRect.bottom
            ) {
                isColliding = true;
            }
        });

        if (!isColliding) {
            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        } else {
            // Reset the position when there's a collision
            target.style.transform = 'translate(0px, 0px)';
            target.setAttribute('data-x', 0);
            target.setAttribute('data-y', 0);
        }
    }

    return (
        <div className='dragos2'>
            <div id="drag-1" className="drag-drop"></div>
            <div className='wallLevel2'></div>
            <div className='wallLevel21'></div>
            <div className='wallLevel22'></div>
            <div className='wallLevel23'></div>
            <div className='wallLevel24'></div>
            <div id="drag-2" className="drag-drop dropzone"></div>
        </div>
    );
}

export default DraggableElements2;