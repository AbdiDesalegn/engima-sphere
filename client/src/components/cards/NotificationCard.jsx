import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const NotificationCard = ({ avatarSrc, title, content, onClose }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <Avatar alt="Notification Avatar" src={avatarSrc} />
      <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </div>
        {onClose && (
          <IconButton color="inherit" size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
