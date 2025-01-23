'use client';

import Button from "@/components/ui/button";
import PlusRoundedIcon from "@/components/ui/icon/plus-rounded";
import TextField from "@/components/ui/textField";
import * as Form from "@radix-ui/react-form";

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button>سلام مهران</Button>
        <Button disabled>سلام مهران</Button>
        <Button variant="outlined">سلام مهران</Button>
        <Button variant="outlined" disabled>سلام مهران</Button>
        <Button variant="text">سلام مهران</Button>
        <Button variant="text" disabled>سلام مهران</Button>
        <Button variant="elevated">سلام مهران</Button>
        <Button variant="elevated" disabled>سلام مهران</Button>
      </div>

      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button colorScheme="secondary">سلام مهران</Button>
        <Button colorScheme="secondary" disabled>سلام مهران</Button>
        <Button colorScheme="secondary" variant="outlined">سلام مهران</Button>
        <Button colorScheme="secondary" variant="outlined" disabled>سلام مهران</Button>
        <Button colorScheme="secondary" variant="text">سلام مهران</Button>
        <Button colorScheme="secondary" variant="text" disabled>سلام مهران</Button>
        <Button colorScheme="secondary" variant="elevated">سلام مهران</Button>
        <Button colorScheme="secondary" variant="elevated" disabled>سلام مهران</Button>
      </div>

      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button colorScheme="tertiary">سلام مهران</Button>
        <Button colorScheme="tertiary" disabled>سلام مهران</Button>
        <Button colorScheme="tertiary" variant="outlined">سلام مهران</Button>
        <Button colorScheme="tertiary" variant="outlined" disabled>سلام مهران</Button>
        <Button colorScheme="tertiary" variant="text">سلام مهران</Button>
        <Button colorScheme="tertiary" variant="text" disabled>سلام مهران</Button>
        <Button colorScheme="tertiary" variant="elevated">سلام مهران</Button>
        <Button colorScheme="tertiary" variant="elevated" disabled>سلام مهران</Button>
      </div>

      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button variant="outlined">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button variant="outlined" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button variant="text">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button variant="text" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button variant="elevated">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button variant="elevated" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
      </div>

      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button colorScheme="secondary">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="secondary" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="secondary" variant="outlined">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="secondary" variant="outlined" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="secondary" variant="text">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="secondary" variant="text" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="secondary" variant="elevated">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="secondary" variant="elevated" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
      </div>

      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button colorScheme="tertiary">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="tertiary" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="tertiary" variant="outlined">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="tertiary" variant="outlined" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="tertiary" variant="text">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="tertiary" variant="text" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="tertiary" variant="elevated">
          <PlusRoundedIcon />
          سلام مهران
        </Button>
        <Button colorScheme="tertiary" variant="elevated" disabled>
          <PlusRoundedIcon />
          سلام مهران
        </Button>
      </div>

      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button variant="outlined">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button variant="outlined" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button variant="text">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button variant="text" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button variant="elevated">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button variant="elevated" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
      </div>

      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button colorScheme="secondary">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="secondary" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="secondary" variant="outlined">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="secondary" variant="outlined" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="secondary" variant="text">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="secondary" variant="text" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="secondary" variant="elevated">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="secondary" variant="elevated" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
      </div>

      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button colorScheme="tertiary">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="tertiary" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="tertiary" variant="outlined">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="tertiary" variant="outlined" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="tertiary" variant="text">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="tertiary" variant="text" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="tertiary" variant="elevated">
          سلام مهران
          <PlusRoundedIcon />
        </Button>
        <Button colorScheme="tertiary" variant="elevated" disabled>
          سلام مهران
          <PlusRoundedIcon />
        </Button>
      </div>

      <div style={{ marginBottom: '20px', gap: '8px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <PlusRoundedIcon />
        <PlusRoundedIcon fill="red" />
        <PlusRoundedIcon colorScheme="primary" />
        <PlusRoundedIcon colorScheme="secondary" />
        <PlusRoundedIcon colorScheme="tertiary" />
        <PlusRoundedIcon width={60} height={60} />
      </div>
      <Form.Root style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '100px',
        gap: '20px'
      }}>
        <TextField
          variant="filled"
          startAdornment={<PlusRoundedIcon />}
          endAdornment={<PlusRoundedIcon />}
          label="شماره تلفن"
          placeholder="وارد کنید..."
          helperText="سلام مهران"
          // error
          // disabled
        />
        <TextField
          variant="outlined"
          startAdornment={<PlusRoundedIcon />}
          endAdornment={<PlusRoundedIcon />}
          label="شماره تلفن"
          placeholder="وارد کنید..."
          helperText="سلام مهران"
          error
          disabled
        />
      </Form.Root>
    </div>
  );
}