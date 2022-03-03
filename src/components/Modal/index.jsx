import { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react'
const Index = ({ children }) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={isOpen}
            trigger={<Button>Show Modal</Button>}>
            {children}
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Close
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default Index;
