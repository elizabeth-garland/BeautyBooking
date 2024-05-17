using Models.DTOs;

namespace Repositories.Interface;
public interface ITalentUserRepository
{
    Task<TalentUser> GetUserByIdAsync(string userId);
}