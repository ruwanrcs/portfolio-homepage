import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

const DownloadButton = props => {
    const downloadFile = () => {
      window.location.href = "RuwanCV.pdf"
    }
    return (
              <Button onClick={downloadFile}  rightIcon={<ChevronDownIcon/>} mt={3}  colorScheme="teal" >Download Resume</Button>
    )
  }
  export default DownloadButton;
  