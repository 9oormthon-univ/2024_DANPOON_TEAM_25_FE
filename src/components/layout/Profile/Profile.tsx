import { Avatar } from '@/components/common/Avatar/Avatar';
import { Button } from '@/components/common/Button/Button';
import { Card } from '@/components/common/Card/Card';

interface ProfileProps {
  name: string;
}

export const Profile = ({ name }: ProfileProps) => {
  return (
    <Card className="">
      <div className="p-6 space-y-6 flex-col flex justify-center items-center">
        <Avatar size="lg" />
        <p className="font-bold text-lg text-gray-800">{name}</p>
        <Button
          className="bg-blue-800 rounded-lg px-16 py-2 text-sm text-blue-100"
          children="1:1 채팅"
        />
      </div>
    </Card>
  );
};
