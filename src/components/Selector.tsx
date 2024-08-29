import { FormControl, Select, MenuItem, Typography } from '@mui/material';

interface SelectorProps {
  label: string;
  value: number;
  onChange: (value: any) => void;
  options: { value: number; label: string }[];
  fullWidth?: boolean;
  marginBottom?: number;
  size?: 'small' | 'medium';
}

const Selector = ({
  label,
  value,
  onChange,
  options,
  fullWidth = true,
  marginBottom = 2,
  size = 'medium',
}: SelectorProps) => {
  return (
    <FormControl variant="outlined" fullWidth={fullWidth} sx={{ mb: marginBottom }}>
      <Typography sx={{marginBottom: '1rem'}} variant="body1">{label}</Typography>
      <Select size={size} value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selector;