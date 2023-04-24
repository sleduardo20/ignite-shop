import { styled } from '..';

export const SuccessContainer = styled('main', {
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    marginTop: '2rem',
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: '1.4rem',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: 'large',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration: 'none',

    '&:hover': {
      color: '$green300',
    },
  },
});
export const ImageContainer = styled('div', {
  marginTop: '4rem',
  width: '100%',
  background: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100% )',
  maxWidth: 130,
  height: 145,
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});
