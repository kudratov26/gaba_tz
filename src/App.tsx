import { useState, useEffect, useCallback } from 'react';
import type { User } from './types/user';
import { fetchUsers, searchUsers } from './services/api';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import Pagination from './components/Pagination';

const ITEMS_PER_PAGE = 10;

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setCurrentPage(1); // reset
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      const skip = (currentPage - 1) * ITEMS_PER_PAGE;
      const data = debouncedQuery
        ? await searchUsers(debouncedQuery, ITEMS_PER_PAGE, skip)
        : await fetchUsers(ITEMS_PER_PAGE, skip);
      
      setUsers(data.users);
      setTotal(data.total);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, debouncedQuery]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container max-w-6xl mx-auto">
      <header className='text-center py-12'>
        <h1 className='text-3xl font-bold text-slate-800 mb-2'>User Data</h1>
        <p className='text-slate-600'>Search profile, user from dummy data</p>
      </header>

      <main className='p-8'>
        <SearchBar query={searchQuery} onSearch={setSearchQuery} />
        
        <UserList users={users} isLoading={isLoading} />
        
        {!isLoading && users.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalItems={total}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={handlePageChange}
          />
        )}
      </main>
    </div>
  );
}

export default App;
