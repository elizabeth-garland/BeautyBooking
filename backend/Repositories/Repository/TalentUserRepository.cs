using DataAccess;
using Microsoft.EntityFrameworkCore;
using Models.DTOs;
using Repositories.Interface;

namespace Repositories.Repository
{
    public class TalentUserRepository(BeautyDbContext context) : ITalentUserRepository
    {
        private readonly BeautyDbContext _context = context;

        public async Task<TalentUser> GetUserByIdAsync(string userId) {
            var user = await _context.TalentUser.Where(u => u.UserId == userId).FirstOrDefaultAsync() ?? throw new KeyNotFoundException($"User with id {userId} cannot be found");
            return user;
        }
    }
}