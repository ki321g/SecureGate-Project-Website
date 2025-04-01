import { Typography, Stack } from '@mui/material'
import { SecurityOutlined } from '@mui/icons-material'

const styles = {
  stackRowContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  stackColumnContainer: {
    alignItems: 'center'
  },
  securityIcon: {
    fontSize: { xs: 60, sm: 80, md: 100 },
    color: 'primary.main'
  },
  headerText: {
    fontSize: { xs: 40, sm: 60, md: 80 },
    color: 'primary.main',
    alignItems: 'center',
    fontWeight: '900',
    lineHeight: 1
  },
  subHeaderText: {
    fontSize: { xs: 16, sm: 20, md: 24 },
    color: 'text.secondary',
    alignItems: 'center',
    fontWeight: '700',
    mt: 0
  }
}

const LogoComponent = () => {
  return (
    <Stack direction="row" spacing={1} sx={styles.stackRowContainer}>
      <SecurityOutlined sx={styles.securityIcon} />
      <Stack direction="column" spacing={0} sx={styles.stackColumnContainer}>
        <Typography variant="h1" component="h1" sx={styles.headerText}>
          SecureGate
        </Typography>
        <Typography variant="h4" component="div" sx={styles.subHeaderText}>
          IoT Security Access Management
        </Typography>
      </Stack>
    </Stack>
  )
}

export default LogoComponent
