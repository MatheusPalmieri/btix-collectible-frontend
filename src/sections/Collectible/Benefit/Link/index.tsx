import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Benefit, BenefitStatus } from '@/interfaces/benefit';
import { claimAdvantage } from '@/services/advantage';
import { motion } from 'framer-motion';
import { CheckCheck, CircleCheck, Clock, Copy, Lock } from 'lucide-react';
import { useState } from 'react';

export const CollectibleBenefitLink = ({
  benefit,
  advantageId,
  fetchAdvantage,
}: {
  benefit: Benefit;
  advantageId: string;
  fetchAdvantage: () => Promise<void>;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDisabled] = useState<boolean>(benefit.status === BenefitStatus.BLOCKED);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleClaim = async () => {
    try {
      setIsLoading(true);
      await claimAdvantage(advantageId, benefit.id);
      await fetchAdvantage();
      setIsOpen(true);
    } catch (error) {
      console.error('Error claiming link benefit', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(benefit.data[0].value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };
  const handleAccess = () => window.open(benefit.data[0].value, '_blank');

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1'>
        {benefit.status === 'claimed' ? (
          <CircleCheck className='size-4 text-green-500' />
        ) : benefit.status === 'blocked' ? (
          <Lock className='size-4 text-red-500' />
        ) : (
          <Clock className='size-4 text-orange-500' />
        )}

        <p className='text-sm font-medium'>{benefit.name}</p>
      </div>

      <Button
        className='w-20 h-6 rounded-md'
        onClick={handleClaim}
        isLoading={isLoading}
        isDisabled={isLoading || isDisabled}
      >
        {isDisabled ? (benefit.status === BenefitStatus.CLAIMED ? 'Claimed' : 'Blocked') : 'Access'}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='w-5/6 max-w-80 text-secondary-700'>
          <DialogHeader>
            <DialogTitle className='h-6 flex justify-center items-center'>
              {benefit.name}
            </DialogTitle>
            <DialogDescription>
              This is the link to access the benefit. Please click the button below to copy the
              link.
            </DialogDescription>
          </DialogHeader>
          <div className='flex items-center space-x-2'>
            <div className='grid flex-1 gap-2'>
              <Label htmlFor='link' className='sr-only'>
                Link
              </Label>
              <Input
                id='link'
                defaultValue={benefit.data[0].value}
                className='bg-tertiary-100 border-none'
                readOnly
              />
            </div>

            <Button
              size='icon'
              className={`px-3 ${isCopied && 'bg-green-500 hover:bg-green-600'}`}
              onClick={handleCopy}
            >
              <span className='sr-only'>Copy</span>
              <motion.div
                key={isCopied ? 'copied' : 'copy'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, type: 'spring', stiffness: 100 }}
              >
                {isCopied ? <CheckCheck className='size-4' /> : <Copy className='size-4' />}
              </motion.div>
            </Button>
          </div>
          <DialogFooter>
            <div className='flex gap-2'>
              <DialogClose className='w-full'>
                <Button variant='ghost' className='w-full'>
                  Close
                </Button>
              </DialogClose>
              <Button className='w-full' onClick={handleAccess}>
                Access
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
