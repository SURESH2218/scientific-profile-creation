interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="mesh-background min-h-screen pb-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10">{children}</div>
    </div>
  );
};

export default ProfileLayout;
