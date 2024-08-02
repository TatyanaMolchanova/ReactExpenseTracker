import {
    Button,
    FormControl, FormLabel, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Radio, RadioGroup
} from "@chakra-ui/react";
import {GlobalContext} from "../../context";
import {useContext} from "react";


export default function TransactionForm({onClose, isOpen}) {

    const {formData, setFormData, value, setValue, handleFormSubmit} = useContext(GlobalContext)

    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleFormSubmit(formData)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Add New Transaction
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input
                                placeholder="Enter Transaction description"
                                name="description"
                                type="text"
                                onChange={handleFormChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input
                                placeholder="Enter Transaction amount"
                                name="amount"
                                type="number"
                                onChange={handleFormChange}
                            />
                        </FormControl>
                        <RadioGroup mt="5" value={value} onChange={setValue}>
                            <Radio
                                onChange={handleFormChange}
                                checked={formData.type === 'income'}
                                value="income" colorScheme="blue" name="type">Income</Radio>
                            <Radio
                                onChange={handleFormChange}
                                checked={formData.type === 'expense'}
                                value="expense" colorScheme="red" name="type">Expense</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr="4" onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="submit">Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}